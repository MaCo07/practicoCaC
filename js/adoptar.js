const animalesParaAdoptantes = [
    {
      id:1,
      imagenAnimal:
        "https://imgs.search.brave.com/hUWF9WrmRcw3mv8cWCm24PWRCNkBmjNwkQ8KqIjTtGw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lc2Jvbml0YXMu/Ym9zcXVlZGVmYW50/YXNpYXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzA4/L2ltJUMzJUExZ2Vu/ZXMtZGUtcGVycml0/b3MyLTQwMHgyODQu/anBn",
      nombreAnimal: "pepe",
      genero: "macho",
      edadAnimal: 1,
      esAdoptado: true,
    },
    {
      id:2,
      imagenAnimal:
        "https://imgs.search.brave.com/hUWF9WrmRcw3mv8cWCm24PWRCNkBmjNwkQ8KqIjTtGw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lc2Jvbml0YXMu/Ym9zcXVlZGVmYW50/YXNpYXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzA4/L2ltJUMzJUExZ2Vu/ZXMtZGUtcGVycml0/b3MyLTQwMHgyODQu/anBn",
      nombreAnimal: "pepe",
      genero: "macho",
      edadAnimal: 1,
      esAdoptado: true,
    },
    {
      id:3,
      imagenAnimal:
        "https://imgs.search.brave.com/IpBBVkgkTKvhMr2x8Ue8S-jrtAC4ixTP3Mi5YpGYqro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmVlbGNhdHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA1L2dhdG9zLWJs/YW5jby15LW5lZ3Jv/LmpwZw",
      nombreAnimal: "milo",
      genero: "macho",
      edadAnimal: 1.5,
      esAdoptado: true,
    },
    {
      id:4,
      imagenAnimal:
        "https://imgs.search.brave.com/-ymUv8RTFbNYaMDhOmQEm-GPyfH6eFGVg-1P8rbDOIM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODA4MzQ2NDM2NDIt/NTk3Mzk0NmQ1ZTYx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZH/ZGhkRzhsTWpCaWJH/RnVZMjhsTWpCNUpU/SXdibVZuY205OFpX/NThNSHg4TUh4OGZE/QT0.jpeg",
      nombreAnimal: "pity",
      genero: "hembra",
      edadAnimal: 17,
      esAdoptado: true,
    },
    {
      id:5,
      imagenAnimal:
        "https://imgs.search.brave.com/-ymUv8RTFbNYaMDhOmQEm-GPyfH6eFGVg-1P8rbDOIM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODA4MzQ2NDM2NDIt/NTk3Mzk0NmQ1ZTYx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZH/ZGhkRzhsTWpCaWJH/RnVZMjhsTWpCNUpU/SXdibVZuY205OFpX/NThNSHg4TUh4OGZE/QT0.jpeg",
      nombreAnimal: "pity",
      genero: "hembra",
      edadAnimal: 17,
      esAdoptado: true,
    },
  ];
  
  const contenedorCardsAdoptados = document.querySelector(
    ".contenedor-adoptados_cards"
  );
  /*
   *  function que transforma la primera letra en mayuscula
   */
  function mayusculaPrimeraLetra(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }

  function mostrarTodosAnimalesAdoptados(arr) {
    arr.forEach((animal) => {
      // crear un nuevo div para la tarjeta
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
  
      // crear la imagen
      const img = document.createElement("img");
      img.classList.add("card-img");
      img.src = animal.imagenAnimal;
      img.alt = "imagen-animal";
  
      // crear el div para el texto de la tarjeta
      const cardTextDiv = document.createElement("div");
      cardTextDiv.classList.add("card-text");
  
      // crear el título h2
      const title = document.createElement("h2");
      title.classList.add("text-h2");
      title.textContent = mayusculaPrimeraLetra(animal.nombreAnimal);
  
      // crear el párrafo con la información del animal
      const paragraph = document.createElement("p");
      paragraph.classList.add("text-p");
      paragraph.textContent = `${animal.genero} - ${animal.edadAnimal} año${
        animal.edadAnimal !== 1 ? "s" : ""
      }`;
  
      // agregar la imagen al div de la tarjeta
      cardDiv.appendChild(img);
  
      // agregar el título, párrafo y botón al div de texto de la tarjeta
      cardTextDiv.appendChild(title);
      cardTextDiv.appendChild(paragraph);
  
      // agregar el div de texto de la tarjeta al div de la tarjeta
      cardDiv.appendChild(cardTextDiv);
  
      // agregar la tarjeta al contenedor de tarjetas
      contenedorCardsAdoptados.appendChild(cardDiv);
    });
  }
  
  document.addEventListener(
    "DOMContentLoaded",
    mostrarTodosAnimalesAdoptados(animalesParaAdoptantes)
  );