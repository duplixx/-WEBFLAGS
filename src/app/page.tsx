import About from "@/components/about";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-8 text-white font-bold">
      <div className="container mb-8 ">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl">
      <Image
        src="https://images.unsplash.com/photo-1634936016780-65f6a77ebdd4?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-fill bg-center"
      />
    </AspectRatio>
    </div>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}
