import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

async function listarProdutos(lojaId) {
  const snapshot = await getDocs(collection(db, 'lojas', lojaId, 'produtos'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function salvarProduto(lojaId, produto) {
  await addDoc(collection(db, 'lojas', lojaId, 'produtos'), produto);
}

async function atualizarProduto(lojaId, produto) {
  const docRef = doc(db, 'lojas', lojaId, 'produtos', produto.id);
  const { id, ...resto } = produto;
  await updateDoc(docRef, resto);
}

async function removerProduto(lojaId, produtoId) {
  await deleteDoc(doc(db, 'lojas', lojaId, 'produtos', produtoId));
}

export default { listarProdutos, salvarProduto, atualizarProduto, removerProduto };
