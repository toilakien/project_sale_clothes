export const renderUrlImage = (arr?: any[]) => {
    const arrNew = [] as any;
    arr?.forEach((element) => {
        const urlImage = element?.attributes?.formats?.thumbnail?.url;
        const urlImageStr = `http://localhost:1337${urlImage}`;
        arrNew.push(urlImageStr);
    });
    return arrNew;
};
