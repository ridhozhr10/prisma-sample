const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["query"],
});

async function main() {
  const result = await prisma.branch.findMany({
    where: {
      name: {
        contains: "ta",
      },
    },
  });
  console.log(result);
}

main().finally(async () => {
  console.log(`exiting program`);
  await prisma.$disconnect();
});
