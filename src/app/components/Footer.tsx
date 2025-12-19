import logo from '../../assets/techsocLogo.jpg';

export function Footer() {
    return (
        <footer className='text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt='' className='h-10 w-10' />
                        <span className='text-xl'>TechSoc</span>
                    </div>
                    <div className='text-center text-sm'>
                        © 2025 TechSoc. All rights reserved.
                    </div>
                    {/* <div className='flex gap-6 text-sm'>
                        <a
                            href='#'
                            className='hover:text-blue-400 transition-colors'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='hover:text-blue-400 transition-colors'
                        >
                            Terms of Service
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
