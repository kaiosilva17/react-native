import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const LOJAS_COLLECTION = 'lojas';

async function listar() {
  const snapshot = await getDocs(collection(db, LOJAS_COLLECTION));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function salvar(loja) {
  await addDoc(collection(db, LOJAS_COLLECTION), loja);
}

async function atualizar(loja) {
  const docRef = doc(db, LOJAS_COLLECTION, loja.id);
  const { id, ...resto } = loja;
  await updateDoc(docRef, resto);
}

async function remover(id) {
  await deleteDoc(doc(db, LOJAS_COLLECTION, id));
}

export default { listar, salvar, atualizar, remover };