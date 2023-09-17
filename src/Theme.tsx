export const DarkTheme = {
    bodyBg: '#1E202A',
    topBgPattern: '#1F212E',
    cardBg: '#252A41',
    textColor1: '##8B97C6',
    textColor2: '#FFFFFF',
    chart: '#8F8BDA'
}

export const LightTheme = {
    bodyBg: '#FFFFFF',
    topBgPattern: '#F5F7FF',
    cardBg: '#F0F2FA',
    textColor1: '#63687E',
    textColor2: '#1E202A',
    chart: '#8F8BDA',
}

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devices = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
};