import {
  BusinessStatusEnum,
  DeliveryStatusEnum,
  DriverStatusEnum,
  type Delivery,
} from "@prisma/client";

const DELIVERY_IN_PROGRESS_STATUSES: DeliveryStatusEnum[] = [
  DeliveryStatusEnum.ASSIGNED,
  DeliveryStatusEnum.IN_PROGRESS,
  DeliveryStatusEnum.IN_TRANSIT,
];

const DELIVERY_FINISHED_STATUSES: DeliveryStatusEnum[] = [
  DeliveryStatusEnum.FINISHED,
  DeliveryStatusEnum.CANCELLED,
];

const DELIVERY_NOT_STARTED_STATUSES: DeliveryStatusEnum[] = [
  DeliveryStatusEnum.CREATED,
  DeliveryStatusEnum.ASSIGNED,
];

const DRIVER_ALLOWED_STATUS_TRANSITIONS: Record<
  DriverStatusEnum,
  DriverStatusEnum[]
> = {
  [DriverStatusEnum.PENDING_PICKUP]: [
    DriverStatusEnum.PICKING_UP,
    DriverStatusEnum.CANCELLED,
  ],
  [DriverStatusEnum.PICKING_UP]: [
    DriverStatusEnum.IN_TRANSIT,
    DriverStatusEnum.CANCELLED,
  ],
  [DriverStatusEnum.IN_TRANSIT]: [
    DriverStatusEnum.TRYING_DELIVERY,
    DriverStatusEnum.NOT_DELIVERED,
    DriverStatusEnum.CANCELLED,
  ],
  [DriverStatusEnum.TRYING_DELIVERY]: [
    DriverStatusEnum.DELIVERED,
    DriverStatusEnum.NOT_DELIVERED,
    DriverStatusEnum.CANCELLED,
  ],
  [DriverStatusEnum.NOT_DELIVERED]: [
    DriverStatusEnum.IN_RETURN,
    DriverStatusEnum.CANCELLED,
  ],
  [DriverStatusEnum.IN_RETURN]: [
    DriverStatusEnum.PENDING_PICKUP,
    DriverStatusEnum.CANCELLED,
  ],
  [DriverStatusEnum.DELIVERED]: [], // Terminal state
  [DriverStatusEnum.CANCELLED]: [], // Terminal state
};

const BUSINESS_ALLOWED_STATUS_TRANSITIONS: Record<
  BusinessStatusEnum,
  BusinessStatusEnum[]
> = {
  [BusinessStatusEnum.PENDING]: [
    BusinessStatusEnum.IN_PROGRESS,
    BusinessStatusEnum.CANCELLED,
  ],
  [BusinessStatusEnum.IN_PROGRESS]: [
    BusinessStatusEnum.IN_TRANSIT,
    BusinessStatusEnum.CANCELLED,
  ],
  [BusinessStatusEnum.IN_TRANSIT]: [
    BusinessStatusEnum.DELIVERED,
    BusinessStatusEnum.NOT_DELIVERED,
    BusinessStatusEnum.CANCELLED,
  ],
  [BusinessStatusEnum.NOT_DELIVERED]: [
    BusinessStatusEnum.IN_RETURN,
    BusinessStatusEnum.CANCELLED,
  ],
  [BusinessStatusEnum.IN_RETURN]: [
    BusinessStatusEnum.IN_PROGRESS,
    BusinessStatusEnum.CANCELLED,
  ],
  [BusinessStatusEnum.DELIVERED]: [],
  [BusinessStatusEnum.CANCELLED]: [],
};

type ValidationResult = {
  isValid: boolean;
  message?: string;
};

function validateStatusTransition<
  T extends BusinessStatusEnum | DriverStatusEnum
>(
  transitions: Record<T, T[]>,
  currentStatus: T,
  newStatus?: T
): ValidationResult {
  if (!newStatus || currentStatus === newStatus) {
    return {
      isValid: true,
      message: "No status change needed",
    };
  }

  const allowedTransitions = transitions[currentStatus];

  if (!allowedTransitions.includes(newStatus)) {
    return {
      isValid: false,
      message: `Invalid transition from ${currentStatus} to ${newStatus}. Allowed transitions are: ${allowedTransitions.join(
        ", "
      )}`,
    };
  }

  return {
    isValid: true,
    message: "Valid status transition",
  };
}

function getDeliveryStatus(delivery: Delivery): DeliveryStatusEnum {
  const { businessStatus, driverStatus } = delivery;

  if (
    businessStatus === BusinessStatusEnum.CANCELLED ||
    driverStatus === DriverStatusEnum.CANCELLED
  ) {
    return DeliveryStatusEnum.CANCELLED;
  }

  if (businessStatus === BusinessStatusEnum.PENDING && !driverStatus) {
    return DeliveryStatusEnum.CREATED;
  }

  if (
    businessStatus === BusinessStatusEnum.IN_PROGRESS &&
    driverStatus === DriverStatusEnum.PENDING_PICKUP
  ) {
    return DeliveryStatusEnum.ASSIGNED;
  }

  if (
    businessStatus === BusinessStatusEnum.IN_PROGRESS &&
    driverStatus === DriverStatusEnum.PICKING_UP
  ) {
    return DeliveryStatusEnum.IN_PROGRESS;
  }

  if (
    businessStatus === BusinessStatusEnum.IN_TRANSIT &&
    (driverStatus === DriverStatusEnum.IN_TRANSIT ||
      driverStatus === DriverStatusEnum.TRYING_DELIVERY)
  ) {
    return DeliveryStatusEnum.IN_TRANSIT;
  }

  if (
    businessStatus === BusinessStatusEnum.DELIVERED &&
    driverStatus === DriverStatusEnum.DELIVERED
  ) {
    return DeliveryStatusEnum.FINISHED;
  }

  if (
    (businessStatus === BusinessStatusEnum.NOT_DELIVERED ||
      businessStatus === BusinessStatusEnum.IN_RETURN) &&
    (driverStatus === DriverStatusEnum.NOT_DELIVERED ||
      driverStatus === DriverStatusEnum.IN_RETURN)
  ) {
    return DeliveryStatusEnum.CONFLICT;
  }

  return delivery.status;
}

export {
  BUSINESS_ALLOWED_STATUS_TRANSITIONS,
  DELIVERY_FINISHED_STATUSES,
  DELIVERY_IN_PROGRESS_STATUSES,
  DELIVERY_NOT_STARTED_STATUSES,
  DRIVER_ALLOWED_STATUS_TRANSITIONS,
  getDeliveryStatus,
  validateStatusTransition,
};
