"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const tasksActon = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

// export const createTasks = async (formData: FormData): Promise<any> => {
//   "use server";
//   const content = formData.get("content") as string;
//   await prisma.task.create({
//     data: {
//       content,
//     },
//   });
//   revalidatePath("/task");
// };

export const getTast = async (id: string) => {
  return prisma.task.findMany({
    where: {
      id,
    },
  });
};
export const ediTast = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const content = formData.get("content") as string;
  const completed = formData.get("completed") as unknown;
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};

export const createTaskCustom = async (
  preState: Initail,
  formData: FormData
): Promise<any> => {
  const content = formData.get("content") as string;
  const Task = z.object({
    content: z.string().min(5),
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/task");
    return { ...preState, message: "success" };
  } catch (error) {
    console.log(error);
    return { ...preState, message: "error" };
  }
};
