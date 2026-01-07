import { prisma } from "@/src/lib/prisma";

async function main() {
  console.log("Seeding database...");

  const roles = ["user", "admin"];
  for (const roleName of roles) {
    await prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: { name: roleName },
    });
  }

  const genders = ["Femenino", "Masculino", "Otro"];
  for (const genderName of genders) {
    await prisma.gender.upsert({
      where: { name: genderName },
      update: {},
      create: { name: genderName },
    });
  }

  const categories = ["Electrónica", "Ropa", "Hogar", "Deportes"];
  for (const categoryName of categories) {
    await prisma.category.upsert({
      where: { name: categoryName },
      update: {},
      create: { name: categoryName },
    });
  }

  console.log("Seed completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
