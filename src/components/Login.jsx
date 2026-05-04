import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from || "/";

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    let newValue = value;

    // Telefone só número
    if (name === "telefone") {
      newValue = value.replace(/\D/g, "");
    }

    setForm({
      ...form,
      [name]: newValue,
    });

    validateField(name, newValue);
  }

  function validateField(name, value) {
    let error = "";

    if (name === "nome") {
      if (value.length < 3) error = "Nome deve ter no mínimo 3 caracteres";
      if (value.length > 50) error = "Nome muito longo";
    }

    if (name === "email") {
      const emailRegex = /\S+@\S+\.\S+/;

      if (!emailRegex.test(value)) {
        error = "E-mail inválido";
      } else {
        const clientes =
          JSON.parse(localStorage.getItem("clientes-bikcraft")) || [];

        const existe = clientes.some(
          (c) => c.email.toLowerCase() === value.toLowerCase()
        );

        if (existe) {
          error = "Este e-mail já está cadastrado";
        }
      }
    }

    if (name === "telefone") {
      if (value.length < 10) error = "Telefone incompleto";
      if (value.length > 11) error = "Máximo 11 dígitos";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Verifica se tem erro
    const hasError = Object.values(errors).some((e) => e);

    if (hasError) return;

    const clientes =
      JSON.parse(localStorage.getItem("clientes-bikcraft")) || [];

    const novoCliente = {
      id: Date.now(),
      ...form,
    };

    localStorage.setItem(
      "clientes-bikcraft",
      JSON.stringify([...clientes, novoCliente])
    );

    localStorage.setItem("cliente-logado-bikcraft", JSON.stringify(novoCliente));
navigate(from);

    setForm({
      nome: "",
      email: "",
      telefone: "",
    });

    setErrors({});
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-20 md:px-40">
      <h2 className="text-4xl font-bold mb-4">
        crie sua conta<span className="text-[#ffbb00]">.</span>
      </h2>

      <form className="max-w-xl space-y-5" onSubmit={handleSubmit}>
        
        {/* Nome */}
        <div>
          <label className="block mb-2 font-bold">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            maxLength={50}
            required
            className="w-full p-4 rounded bg-[#111] border border-gray-700 text-white outline-none focus:border-[#ffbb00]"
          />
          {errors.nome && (
            <p className="text-red-400 text-sm mt-1">{errors.nome}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-bold">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            maxLength={100}
            required
            className="w-full p-4 rounded bg-[#111] border border-gray-700 text-white outline-none focus:border-[#ffbb00]"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label className="block mb-2 font-bold">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            maxLength={11}
            required
            className="w-full p-4 rounded bg-[#111] border border-gray-700 text-white outline-none focus:border-[#ffbb00]"
          />
          {errors.telefone && (
            <p className="text-red-400 text-sm mt-1">{errors.telefone}</p>
          )}
        </div>

        <button
          disabled={Object.values(errors).some((e) => e)}
          className="bg-[#ffbb00] hover:bg-yellow-500 text-black font-bold py-4 px-8 uppercase tracking-widest text-sm transition disabled:opacity-50"
        >
          Salvar dados
        </button>
      </form>
    </section>
  );
}