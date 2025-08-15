interface StatisticsProps {
  amount: string;
  text: string;
  className?: string;
  isAnimated?: boolean;
}

const Statistics: React.FC<StatisticsProps> = ({ amount, text, className = "", isAnimated = false }) => {
  return (
    <div className={`statistics ${isAnimated ? 'animation' : ''} bg-main text-center ${className}`}>
      <h5 className="statistics__amount text-white">{amount}</h5>
      <span className="statistics__text text-white font-14">{text}</span>
    </div>
  );
};
export default Statistics;
