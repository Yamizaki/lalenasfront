import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/events/');
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data); // Almacena los usuarios en el estado
        console.log(data); // Imprime los valores en la consola
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
  }, []); // [] asegura que el efecto se ejecute solo una vez

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul className='flex gap-10 justify-center'>
        {users.map((evento, index) => (
          <div className="w-96">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
            <img
            src={evento.image}
              alt={evento.image}
              className="h-56 w-full object-cover"
            />
    
            <div className="bg-gray-800 p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500 dark:text-gray-400"
              >
               {evento.start_date} -  {evento.end_date}
              </time>
    
              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                {evento.title}
                </h3>
              </a>
    
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              {evento.description}
              </p>
            </div>
          </article>
        </div>
           // Renderiza los usuarios como una lista
        ))}
      </ul>
    </div>
  );
};

export default UserList;
