import { Hono } from "hono";
import { sign } from "hono/jwt";
import { Env } from "@/api/routes/index.ts";

const auth = new Hono<{ Bindings: Env }>();

// Signup route
auth.post("/auth/signup", async (c) => {
    // const { username, password } = await c.req.json();

    // Check if user already exists
    // if (users.some(u => u.username === username)) {
    //    c.status(400);
    //    return c.json({ message: "Username already exists" });
    //}

    // Hash the password
    //const hashedPassword = await bcrypt.hash(password);

    // Create new user
    // const newUser = {
    //     id: users.length + 1,
    //     username,
    //     password: hashedPassword,
    // };
    // users.push(newUser);

    // Generate JWT token
    const token = await sign({ id: 'asd' }, c.env.JWT_SECRET);

    return c.json({ message: "User created successfully", token });
});

// Login route
auth.post("/auth/login", async (c) => {
    // const { username, password } = await c.req.json();
    // const user = users.find(u => u.username === username);

    //  if (!user || !(await bcrypt.compare(password, user.password))) {
    //    c.status(401);
    //    return c.json({ message: "Invalid credentials" });
    //}

    const token = await sign({ id: 'asd' }, c.env.JWT_SECRET);
    return c.json({ token });
});

export { auth }