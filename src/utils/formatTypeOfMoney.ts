export function formatTypeOfMoney(value?: number) {
    return value?.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
