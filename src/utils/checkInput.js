import { toast } from 'react-toastify';

const checkCorrectInput = (inputValue, inputName, balance) => {
  if (inputValue < 0) {
    toast.warn('Сумма не может быть отрицательной!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (!inputValue) {
    toast.warn('Введите сумму для проведения операции!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (inputValue > balance && inputName === 'withdraw') {
    toast.error('На счету недостаточно средств для проведения операции!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  return true;
};

export default checkCorrectInput;
