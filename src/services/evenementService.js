import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEvenement(data) {
  return await prisma.evenement.create({ data });
}

export async function getEvenements() {
  return await prisma.evenement.findMany();
}

export async function getEvenementById(id) {
  return await prisma.evenement.findUnique({ where: { id } });
}

export async function updateEvenement(id, data) {
  return await prisma.evenement.update({ where: { id }, data });
}

export async function deleteEvenement(id) {
  return await prisma.evenement.delete({ where: { id } });
}
