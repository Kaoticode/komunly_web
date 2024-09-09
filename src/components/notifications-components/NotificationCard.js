export const NotificationCard = () => {
  return (
    <li className="bg-opacity-10 bg-white p-4 rounded-lg shadow-md border-white border-opacity-20 border-[0.01px] flex gap-5 items-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Imagen de perfil"
        className="size-16 rounded-full"
      />
      <div className="flex flex-col">
        <h3 className="text-lg">Name</h3>
        <p className="text-komunly-gray-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          quod.
        </p>
      </div>
    </li>
  );
};
