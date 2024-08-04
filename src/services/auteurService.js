import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAuteur(data) {
  return await prisma.auteur.create({ data });
}

export async function getAuteurs() {
  return await prisma.auteur.findMany({ include: { livres: true } });
}

export async function getAuteurById(id) {
  return await prisma.auteur.findUnique({ where: { id }, include: { livres: true } });
}

export async function updateAuteur(id, data) {
  return await prisma.auteur.update({ where: { id }, data });
}

export async function deleteAuteur(id) {
  return await prisma.auteur.delete({ where: { id } });
}
