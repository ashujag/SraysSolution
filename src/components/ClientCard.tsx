interface ClientCardProps {
  name: string;
  logo: string;
}

const ClientCard = ({ name, logo }: ClientCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <img src={logo} alt={name} className="h-24 object-contain mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 text-center">{name}</h3>
    </div>
  );
};

export default ClientCard;
