"use client";
import { Container } from "@/components/container";
import { Steps } from "@/components/sidebar";
import { StepNumberProvider } from "@/hook/stepContextHook";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className="flex flex-col mx-2">
      <div className="flex flex-col lg:flex-row bg-white rounded-xl p-6 lg:p-4 mx-2 mt-[6.125rem] lg:mt-0 shadow-lg gap-y-14 lg:gap-y-0 h-screen">
        <StepNumberProvider>
          <Steps />
          <Container />
          <ToastContainer />
        </StepNumberProvider>
      </div>
    </div>
  );
}
