const initApp = () => {
    const bambergerBtn = document.getElementById(
        'hamburger-button'
    )

    const mobibeMenu = document.getElementById(
        'mobile-menu'
    )

    toggleMenu = () => {
        mobibeMenu.classList.toggle('hidden')
        mobibeMenu.classList.toggle('flex')
        bambergerBtn.classList.toggle('toggle-btn')
    }


    bambergerBtn.addEventListener('click', toggleMenu)
    mobibeMenu.addEventListener('click', toggleMenu)


}

document.addEventListener('DOMContentLoaded', initApp)