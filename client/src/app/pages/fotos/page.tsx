"use client";

import { useState } from "react";
import FileUploader from "../../components/FileUploader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";

export default function FotosBike() {
  const [isValidated, setIsValidated] = useState(false);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header />
      <Title>{"Anexe as seguintes fotos da bike:"}</Title>
      <p className="italic mt-2">
        clique no <strong>i</strong> para detalhes
      </p>
      <div className="mt-20 flex flex-col gap-28">
        <FileUploader idName="bikeLeft" pathImageExample="/images/bikeLeft.jpg">
          {"Lado esquerdo"}
        </FileUploader>
        <FileUploader
          idName="bikeRight"
          pathImageExample="/images/bikeRight.jpg"
        >
          {"Lado direito"}
        </FileUploader>
      </div>

      <Footer
        pathUrlBack="/pages/documentos"
        isValidated={true}
        pathUrlNext="/pages/finalizar"
      />
    </main>
  );
}
