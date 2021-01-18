export const switchTheme = (e) => {

    const { checked }  = e.target
    const arr = ['https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css', 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css'];
    const ref = document.querySelector('head').querySelector('Link');

    checked ? ref.href = arr[1] : ref.href = arr[0];

}
export const defaultTheme = () => {
    document.querySelector('head').querySelector('Link').href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css'
}