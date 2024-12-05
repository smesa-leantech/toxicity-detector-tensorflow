# 🛡️ Detector de Toxicidad con TensorFlow

Este proyecto implementa un detector de toxicidad en tiempo real utilizando TensorFlow.js y React, desarrollado por [smesa-leantech](https://github.com/smesa-leantech/toxicity-detector-tensorflow).

## ✨ Características

- Análisis de texto en tiempo real
- Interfaz de usuario moderna y responsive usando Shadcn/ui
- Visualización de resultados mediante gráficos
- Soporte para múltiples categorías de toxicidad:
  - Toxicidad general
  - Insultos
  - Amenazas
  - Lenguaje explícito
  - Identidad de odio
  - Obscenidad

## 🛠️ Tecnologías Utilizadas

- **Frontend**: 
  - React + TypeScript + Vite
  - TailwindCSS para estilos
- **ML**: TensorFlow.js
- **UI Components**: 
  - Shadcn/ui
  - Radix UI para componentes accesibles
- **Gráficos**: Recharts
- **Utilidades**:
  - Lucide para iconos
  - CMDK para comandos
  - Vaul para drawers

## 🚀 Instalación

1. Clona el repositorio:
````bash
git clone https://github.com/smesa-leantech/toxicity-detector-tensorflow.git
````

2. Instala las dependencias:
````bash
cd toxicity-detector-tensorflow
npm install
````

3. Inicia el servidor de desarrollo:
````bash
npm run dev
````

## 📁 Estructura del Proyecto

````
src/
├── app/                    # Rutas y páginas principales
│   └── public/            # Páginas públicas
│       └── toxicity-detector/  # Módulo principal
├── components/            # Componentes reutilizables
│   └── ui/               # Componentes de interfaz de usuario
├── modules/              # Lógica de negocio
└── assets/              # Recursos estáticos
````

## 💡 Uso

1. Accede a la página principal del detector
2. Ingresa el texto que deseas analizar
3. El modelo procesará el texto en tiempo real
4. Visualiza los resultados del análisis de toxicidad

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- TensorFlow.js por el modelo de detección de toxicidad
- Shadcn/ui por los componentes de interfaz
- La comunidad de código abierto

## 📧 Contacto

Para preguntas y soporte, por favor abre un issue en el [repositorio](https://github.com/smesa-leantech/toxicity-detector-tensorflow).

---

⭐️ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!
