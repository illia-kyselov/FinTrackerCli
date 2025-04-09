import BasketSVG from '../assets/BasketSVG';
import CarSportSVG from '../assets/CarSportSVG';
import CartSVG from '../assets/CartSVG';
import CashSVG from '../assets/CashSVG';
import GameSVG from '../assets/GameSVG';
import HomeSVG from '../assets/HomeSVG';
import MenuSVG from '../assets/MenuSVG';
import PizzaSVG from '../assets/PizzaSVG';
import WalletSVG from '../assets/WalletSVG';
import WifiSVG from '../assets/WifiSVG';

export const categoryIcons: Record<string, React.FC<any>> = {
    'Food & Drinks': PizzaSVG,
    'Uncategorized': MenuSVG,
    'Groceries': BasketSVG,
    'Transport': CarSportSVG,
    'Internet': WifiSVG,
    'Rent': HomeSVG,
    'Entertainment': GameSVG,
    'Shopping': CartSVG,
    'Salary': WalletSVG,
    'Budget': CashSVG,
};
