import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

async function listarFuncionarios(lojaId) {
  const snapshot = await getDocs(collection(db, 'lojas', lojaId, 'funcionarios'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function salvarFuncionario(lojaId, funcionario) {
  await addDoc(collection(db, 'lojas', lojaId, 'funcionarios'), funcionario);
}

async function atualizarFuncionario(lojaId, funcionario) {
  const docRef = doc(db, 'lojas', lojaId, 'funcionarios', funcionario.id);
  const { id, ...resto } = funcionario;
  await updateDoc(docRef, resto);
}

async function removerFuncionario(lojaId, funcionarioId) {
  await deleteDoc(doc(db, 'lojas', lojaId, 'funcionarios', funcionarioId));
}

export default { listarFuncionarios, salvarFuncionario, atualizarFuncionario, removerFuncionario };
