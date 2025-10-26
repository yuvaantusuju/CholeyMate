const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

async function main() {
  const hashed = await bcrypt.hash('welovebubu', 10)
  await prisma.user.upsert({
    where: { username: 'choley_gang' },
    update: {},
    create: { username: 'choley_gang', password: hashed }
  })
  console.log('✅ Demo user created: choley_gang / welovebubu')
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect())
