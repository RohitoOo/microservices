import UserService from "./services/user.service.js";

async function startApp() {
  // Start Services
  await UserService.start();

  try {
    // Simulate User Creation
    const newUser = await UserService.call("user.createUser", {
      username: "Alex",
      email: "alex@gmail.com",
    });

    console.log("New User Created", newUser);

    const users = await UserService.call("user.getUsers");
    console.log("All Users", users);
  } catch (error) {
    console.log("Error", error);
  } finally {
    await UserService.stop();
  }
}

startApp();

// import { ServiceBroker } from "moleculer";

// const broker = new ServiceBroker();

// // Greeter Service

// broker.createService({
//   name: "greeter",
//   actions: {
//     sayHello(ctx) {
//       return `Hello ${ctx.params.name}`;
//     },
//   },
// });

// async function startApp() {
//   await broker.start();
//   const res = await broker.call("greeter.sayHello", { name: "John" });
//   console.log(res);
//   broker.stop();
// }

// startApp();
