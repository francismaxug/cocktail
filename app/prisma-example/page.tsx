import prisma from "@/utils/db";

const prismaHandler = async () => {
  await prisma.task.create({
    data: {
      content: "Learn Prisma",
    },
  });
  const result = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result
};
const PrismaPage = async() => {
  const data = await prismaHandler();
  return (
    <div>
      <h1 className="text-7xl">Prisma</h1>
      <div className="space-y-4">
        {data.map((task) => (
      
            <p key={task.id}>{task.content}</p>
         
          
        ))}
        </div>
    </div>
  );
};
export default PrismaPage;
