import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createLivre(data) {
     return await prisma.livre.create({ data });
}

export async function getLivres() {
     return await prisma.livre.findMany({ include: { auteur: true } });
}

export async function getLivreById(id) {
     return await prisma.livre.findUnique({ where: { id }, include: { auteur: true } });
}

export async function updateLivre(id, data) {
     return await prisma.livre.update({ where: { id }, data });
}

export async function deleteLivre(id) {
     return await prisma.livre.delete({ where: { id } });
}
