import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const grindstone = await prisma.hangboard.upsert({
    where: { name: 'grindstone' },
    update: {},
    create: {
      name: 'grindstone',
      title: 'Grindstone mk2'
    },
  })
  const simpleboard = await prisma.hangboard.upsert({
    where: { name: 'simpleboard' },
    update: {},
    create: {
      name:'simpleboard',
      title: 'Simple Board'
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })