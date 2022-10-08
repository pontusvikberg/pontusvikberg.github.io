import React from 'react'
import styled from 'styled-components'
import { IWorkSectionProps } from '../../../interfaces/IWorkSection'
import { CoverImage } from '../../common/CoverImage'
import Promo from '../../common/Promo'
import SelectedWorkDescription from '../SelectedWorkDescription'
import SelectedWorkHeader from '../SelectedWorkHeader'


const ScannerWork = (props: IWorkSectionProps) => {
    return (
        <div className='pb-48'>
            <SelectedWorkHeader {...props} title='SELECTED WORK. 01' />
            <SelectedWorkDescription title="SCANNER" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'"} />
            <div className='grid gap-10 grid-cols-1 2xl:grid-cols-2'>
                <Promo bg='bg-emerald-500' title='Client' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' src='https://www.apple.com/euro/home/i/screens_alt/images/promos/tv-plus-device-offer/tile__cauwwcyyn9hy_large.jpg'></Promo>
                <div className='hidden 2xl:block'></div>
                <div className='hidden 2xl:block'></div>
                <Promo className='' bg='bg-indigo-500' imageRight title='Role' description='Lorem  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' src='https://www.apple.com/euro/home/i/screens_alt/images/promos/tv-plus-device-offer/tile__cauwwcyyn9hy_large.jpg'></Promo>
                <Promo bg='bg-amber-500' title='Result' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' src='https://www.apple.com/euro/home/i/screens_alt/images/promos/tv-plus-device-offer/tile__cauwwcyyn9hy_large.jpg'></Promo>
                <div className='hidden 2xl:block'></div>
            </div>
        </div>
    )
}

export default ScannerWork