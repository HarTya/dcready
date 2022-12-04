import Link from 'next/link'
import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <Link href={'/'} className={styles.logo}>
            <svg className={styles.logo_content} width='10vw' height='5vw' viewBox='0 0 175 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M5.979 6.12222V21.2422H10.319C12.139 21.2422 13.5623 20.5189 14.589 19.0722C15.5923 17.6256 16.094 15.8406 16.094 13.7172C16.094 11.5706 15.5923 9.77389 14.589 8.32722C13.5623 6.85722 12.139 6.12222 10.319 6.12222H5.979ZM2.899 25.7222C2.269 25.7222 1.76734 25.5122 1.394 25.0922C1.044 24.6722 0.869004 24.1589 0.869004 23.5522V3.77722C0.892337 3.14722 1.079 2.63389 1.429 2.23722C1.779 1.81722 2.269 1.60722 2.899 1.60722H10.319C13.7023 1.60722 16.3623 2.75055 18.299 5.03722C20.2357 7.32389 21.204 10.2172 21.204 13.7172C21.204 17.2172 20.2357 20.0989 18.299 22.3622C16.3623 24.6022 13.7023 25.7222 10.319 25.7222H2.899ZM57.3969 1.32722C60.8036 1.32722 63.6502 2.43555 65.9369 4.65222C66.4036 5.07222 66.5786 5.65555 66.4619 6.40222C66.3919 7.10222 66.1119 7.68555 65.6219 8.15222C65.1319 8.57222 64.5719 8.78222 63.9419 8.78222C63.3119 8.78222 62.7752 8.58389 62.3319 8.18722C61.0019 6.92722 59.3569 6.29722 57.3969 6.29722C55.4369 6.29722 53.7686 7.02055 52.3919 8.46722C51.0619 9.91389 50.3969 11.6522 50.3969 13.6822C50.3969 15.7589 51.0619 17.5089 52.3919 18.9322C53.7452 20.3556 55.4136 21.0672 57.3969 21.0672C59.3569 21.0672 61.0019 20.4372 62.3319 19.1772C62.7752 18.7806 63.3119 18.5822 63.9419 18.5822C64.5719 18.5822 65.1319 18.7922 65.6219 19.2122C66.1119 19.6789 66.3919 20.2739 66.4619 20.9972C66.5552 21.7206 66.3802 22.2922 65.9369 22.7122C63.6502 24.9289 60.8036 26.0372 57.3969 26.0372C53.9669 26.0372 51.0852 24.8472 48.7519 22.4672C46.4419 20.0639 45.2869 17.1356 45.2869 13.6822C45.2869 10.2289 46.4419 7.31222 48.7519 4.93222C51.0852 2.52889 53.9669 1.32722 57.3969 1.32722ZM83.2723 6.12222V12.9122H87.8573C88.324 12.9122 88.744 12.8189 89.1173 12.6322C89.4906 12.4222 89.8056 12.1656 90.0623 11.8622C90.3423 11.5356 90.5523 11.1739 90.6923 10.7772C90.8323 10.3572 90.9023 9.93722 90.9023 9.51722C90.9023 9.09722 90.8323 8.68889 90.6923 8.29222C90.5523 7.87222 90.354 7.51055 90.0973 7.20722C89.864 6.88055 89.5606 6.62389 89.1873 6.43722C88.8373 6.22722 88.4406 6.12222 87.9973 6.12222H83.2723ZM96.0123 9.37722C95.9656 11.0572 95.4756 12.5506 94.5423 13.8572C93.609 15.1639 92.2906 16.0739 90.5873 16.5872L94.5073 22.2222C94.8573 22.7589 94.939 23.3656 94.7523 24.0422C94.5656 24.6956 94.169 25.1972 93.5623 25.5472C93.0023 25.8739 92.384 25.9672 91.7073 25.8272C91.054 25.6872 90.564 25.3606 90.2373 24.8472L85.6173 17.2172H83.2723V23.5172C83.2723 24.1706 83.0156 24.7306 82.5023 25.1972C82.0123 25.6639 81.4173 25.8972 80.7173 25.8972C80.0406 25.8972 79.4456 25.6639 78.9323 25.1972C78.419 24.7072 78.1623 24.1472 78.1623 23.5172V4.23222C78.1856 3.48555 78.4073 2.86722 78.8273 2.37722C79.2706 1.86389 79.8656 1.60722 80.6123 1.60722H87.9973C90.5406 1.60722 92.5006 2.36555 93.8773 3.88222C95.2773 5.42222 95.989 7.25389 96.0123 9.37722ZM109.958 16.0972C109.841 15.1172 109.468 14.3822 108.838 13.8922C108.231 13.3789 107.461 13.1222 106.528 13.1222C104.475 13.1222 103.261 14.1139 102.888 16.0972H109.958ZM112.758 21.3122C113.201 21.8489 113.353 22.4439 113.213 23.0972C113.096 23.7272 112.735 24.2172 112.128 24.5672C110.611 25.5472 108.733 26.0372 106.493 26.0372C104.09 26.0372 102.06 25.2439 100.403 23.6572C98.7695 22.0939 97.9529 20.0406 97.9529 17.4972C97.9529 14.9772 98.7695 12.9472 100.403 11.4072C102.036 9.84389 104.066 9.06222 106.493 9.06222C108.873 9.06222 110.856 9.86722 112.443 11.4772C114.053 13.0639 114.858 15.1172 114.858 17.6372C114.858 18.0572 114.706 18.4189 114.403 18.7222C114.1 19.0022 113.75 19.1422 113.353 19.1422H102.818C102.888 19.5856 103.04 19.9822 103.273 20.3322C103.53 20.6589 103.833 20.9389 104.183 21.1722C104.556 21.3822 104.965 21.5456 105.408 21.6622C105.875 21.7789 106.353 21.8372 106.843 21.8372C108.01 21.8372 108.955 21.5806 109.678 21.0672C110.261 20.6939 110.821 20.5422 111.358 20.6122C111.918 20.6589 112.385 20.8922 112.758 21.3122ZM129.871 11.3722C129.894 10.7889 130.139 10.2872 130.606 9.86722C131.096 9.42389 131.668 9.20222 132.321 9.20222C132.998 9.20222 133.569 9.41222 134.036 9.83222C134.526 10.2522 134.771 10.7656 134.771 11.3722V23.7272C134.771 24.3339 134.526 24.8472 134.036 25.2672C133.569 25.6872 132.998 25.8972 132.321 25.8972C131.668 25.8972 131.096 25.6872 130.606 25.2672C130.139 24.8239 129.894 24.3106 129.871 23.7272V23.4122C129.358 24.2522 128.658 24.9056 127.771 25.3722C126.884 25.8156 125.951 26.0372 124.971 26.0372C122.801 26.0372 120.923 25.2789 119.336 23.7622C117.796 22.2222 117.026 20.1456 117.026 17.5322C117.026 14.9422 117.796 12.8889 119.336 11.3722C120.899 9.83222 122.778 9.06222 124.971 9.06222C125.344 9.06222 125.753 9.10889 126.196 9.20222C126.639 9.29555 127.083 9.44722 127.526 9.65722C127.969 9.86722 128.389 10.1356 128.786 10.4622C129.206 10.7889 129.568 11.1972 129.871 11.6872V11.3722ZM125.916 21.6972C127.013 21.6972 127.946 21.2889 128.716 20.4722C129.509 19.6556 129.906 18.6872 129.906 17.5672C129.906 16.4472 129.509 15.4906 128.716 14.6972C127.946 13.8572 127.013 13.4372 125.916 13.4372C124.726 13.4372 123.781 13.8456 123.081 14.6622C122.404 15.4556 122.066 16.4239 122.066 17.5672C122.066 18.7106 122.404 19.6906 123.081 20.5072C123.781 21.3006 124.726 21.6972 125.916 21.6972ZM150.96 2.48222C150.983 1.89889 151.228 1.39722 151.695 0.977221C152.185 0.533888 152.756 0.312221 153.41 0.312221C154.086 0.312221 154.658 0.522221 155.125 0.942221C155.615 1.36222 155.86 1.87555 155.86 2.48222V23.7272C155.86 24.3339 155.615 24.8472 155.125 25.2672C154.658 25.6872 154.086 25.8972 153.41 25.8972C152.756 25.8972 152.185 25.6872 151.695 25.2672C151.228 24.8239 150.983 24.3106 150.96 23.7272V23.4122C150.446 24.2522 149.746 24.9056 148.86 25.3722C147.973 25.8156 147.04 26.0372 146.06 26.0372C143.89 26.0372 142.011 25.2789 140.425 23.7622C138.885 22.2222 138.115 20.1456 138.115 17.5322C138.115 14.9422 138.885 12.8889 140.425 11.3722C141.988 9.83222 143.866 9.06222 146.06 9.06222C146.433 9.06222 146.841 9.10889 147.285 9.20222C147.728 9.29555 148.171 9.44722 148.615 9.65722C149.058 9.86722 149.478 10.1356 149.875 10.4622C150.295 10.7889 150.656 11.1972 150.96 11.6872V2.48222ZM147.005 21.6972C148.101 21.6972 149.035 21.2889 149.805 20.4722C150.598 19.6556 150.995 18.6872 150.995 17.5672C150.995 16.4472 150.598 15.4906 149.805 14.6972C149.035 13.8572 148.101 13.4372 147.005 13.4372C145.815 13.4372 144.87 13.8456 144.17 14.6622C143.493 15.4556 143.155 16.4239 143.155 17.5672C143.155 18.7106 143.493 19.6906 144.17 20.5072C144.87 21.3006 145.815 21.6972 147.005 21.6972ZM166.026 32.4072C165.793 32.9672 165.396 33.3756 164.836 33.6322C164.3 33.8889 163.67 33.9356 162.946 33.7722C162.34 33.6322 161.896 33.2589 161.616 32.6522C161.336 32.0689 161.313 31.4622 161.546 30.8322L164.276 24.0422L159.201 12.2122C158.968 11.5822 158.991 10.9872 159.271 10.4272C159.575 9.84389 160.03 9.47055 160.636 9.30722C161.383 9.12055 162.025 9.16722 162.561 9.44722C163.098 9.72722 163.471 10.1472 163.681 10.7072L166.761 18.6872L169.911 10.7072C170.121 10.1472 170.495 9.72722 171.031 9.44722C171.568 9.16722 172.21 9.12055 172.956 9.30722C173.563 9.47055 174.006 9.84389 174.286 10.4272C174.59 10.9872 174.625 11.5822 174.391 12.2122L166.026 32.4072Z' fill='#F3DED5' />
                <path d='M35.5617 16.6022H32.0217C31.3017 16.6022 30.7217 16.7222 30.2817 16.9622C29.8617 17.2022 29.5317 17.4922 29.2917 17.8322C29.0717 18.1522 28.9317 18.4822 28.8717 18.8222C28.8317 19.1622 28.8417 19.4422 28.9017 19.6622C29.2217 21.1822 30.2617 21.9422 32.0217 21.9422C32.8017 21.9422 33.5917 21.6522 34.3917 21.0722C35.1717 20.4722 35.5617 19.5322 35.5617 18.2522V16.6022ZM35.5617 6.01222C35.9617 6.29222 36.2017 6.67222 36.2817 7.15222C36.3817 7.63222 36.3317 8.02222 36.1317 8.32222C35.8717 8.86222 35.3817 9.16222 34.6617 9.22222C33.9817 9.24222 33.4217 9.14222 32.9817 8.92222C32.5617 8.76222 32.2217 8.68222 31.9617 8.68222C31.2617 8.68222 30.7117 8.92222 30.3117 9.40222C29.9317 9.86222 29.7417 10.3622 29.7417 10.9022C29.7417 10.9222 29.7517 11.0622 29.7717 11.3222C29.8117 11.5622 29.9017 11.8222 30.0417 12.1022C30.2017 12.3822 30.4417 12.6422 30.7617 12.8822C31.0817 13.1222 31.5417 13.2422 32.1417 13.2422H35.5617V12.0122C35.5617 11.5122 35.7517 11.0922 36.1317 10.7522C36.5117 10.3922 36.9717 10.2122 37.5117 10.2122C38.0117 10.2122 38.4517 10.3922 38.8317 10.7522C39.2117 11.1122 39.4117 11.5322 39.4317 12.0122V13.2422H40.4217C40.8617 13.2422 41.2317 13.4122 41.5317 13.7522C41.8317 14.0722 41.9817 14.4622 41.9817 14.9222C41.9817 15.3622 41.8217 15.7522 41.5017 16.0922C41.2017 16.4122 40.8417 16.5822 40.4217 16.6022H39.4317V19.6622C39.4317 20.6822 39.5517 21.4122 39.7917 21.8522C40.0317 22.2722 40.4917 22.5222 41.1717 22.6022C41.6517 22.6422 42.0517 22.8122 42.3717 23.1122C42.6917 23.4122 42.8517 23.8122 42.8517 24.3122C42.8517 24.7922 42.6817 25.1922 42.3417 25.5122C42.0017 25.8322 41.5417 25.9922 40.9617 25.9922C39.9417 25.9922 39.0317 25.7722 38.2317 25.3322C37.4317 24.8722 36.8217 24.2422 36.4017 23.4422C36.0417 24.2422 35.3517 24.8622 34.3317 25.3022C33.3117 25.7622 32.3317 25.9922 31.3917 25.9922C29.3917 25.9922 27.7117 25.4322 26.3517 24.3122C25.0117 23.2122 24.3417 21.7722 24.3417 19.9922C24.3417 17.2922 25.4817 15.5322 27.7617 14.7122C27.0017 14.4722 26.3717 13.9822 25.8717 13.2422C25.3917 12.5022 25.1517 11.6222 25.1517 10.6022C25.1517 9.10222 25.7217 7.78222 26.8617 6.64222C27.9817 5.52222 29.4217 4.91222 31.1817 4.81222C32.8417 4.73222 34.3017 5.13222 35.5617 6.01222Z' fill='url(#paint0_linear_8_62)' />
                <defs>
                    <linearGradient id='paint0_linear_8_62' x1='86.5' y1='-0.277779' x2='86.5' y2='34.9722' gradientUnits='userSpaceOnUse'>
                        <stop offset='0.401042' stop-color='#1ABCFE' />
                        <stop offset='0.453125' stop-color='#FED32F' />
                    </linearGradient>
                </defs>
            </svg>
        </Link>
    )
}