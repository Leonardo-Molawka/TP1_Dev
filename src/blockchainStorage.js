import {readFile} from 'node:fs/promises'
import {writeFile} from 'node:fs/promises'
import {v4 as uuidv4} from 'uuid';
import {getDate} from "./divers.js";
import {createHash} from 'crypto';


/* Chemin de stockage des blocks */
const path = './data/blockchain.json'

/**
 * Mes définitions
 * @typedef { id: string, nom: string, don: number, date: string,hash: string} Block
 * @property {string} id
 * @property {string} nom
 * @property {number} don
 * @property {string} date
 * @property {string} string
 *
 */

/**
 * Renvoie un tableau json de tous les blocks
 * @return {Promise<any>}
 */
export async function findBlocks() {
    try {
        const data = await readFile(path, 'utf-8');
        return JSON.parse(data)
    } catch (error) {
        console.error('Erreur blockchain.json:', error);
        throw error;
    }
}

/**
 * Trouve un block à partir de son idstma
 * @param partialBlock
 * @return {Promise<Block[]>}
 */
export async function findBlock(partialBlock) {
    // A coder
}

/**
 * Trouve le dernier block de la chaine
 * @return {Promise<Block|null>}
 */
export async function findLastBlock() {
    let blocks = await findBlocks()
    if (blocks.length === 0) {
        return null;
    }
    const size = blocks.length
    return blocks[size-1]
}

/**
 * Creation d'un block depuis le contenu json
 * @param contenu
 * @return {Promise<Block[]>}
 */
export async function createBlock(contenu) {
    const id = uuidv4()
    let blocks = await findBlocks()
    console.log(blocks)
    const lastBlock = await findLastBlock();
    // Si le dernier bloc existe, calculer le hash du nouveau bloc
    let previousHash = null;
    if (lastBlock) {
        previousHash = calculateHash(lastBlock); // Utiliser le hash du dernier bloc
    }

    const newBlock = {
        "id" : id,
        "nom" : contenu.nom,
        "don" : contenu.don,
        "date" : getDate(),
        "hash" : previousHash
    }
    console.log(newBlock)
    blocks.push(newBlock)

    const newData = JSON.stringify(blocks);
    writeFile(path, newData, err => {
        // error checking
        if(err) throw err;

        console.log("New data added");
    });

}
export function calculateHash(block){
    const str = JSON.stringify(block);
    console.log(str);
    return createHash('sha256').update(str).digest('hex');
}
