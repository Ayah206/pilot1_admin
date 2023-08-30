import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FolderIcon from '@mui/icons-material/Folder';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';
import ArticleIcon from '@mui/icons-material/Article'; 
import WalletIcon from '@mui/icons-material/Wallet';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import PublicIcon from '@mui/icons-material/Public';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


const list = ['admins management','Manage company', 'manage drivers','manage riders', 'manage documents', 'send messages', 'manage emails', 'manage manual bookings', 'vehicles managing', 'additionalreasons', 'cancellation reasons', 
'manage locations', 'fair management', 'trips management', 'manage payouts', 'manage owe amount', 'manage statements', 'manage wallet & promo',
'referalls', 'manage map', 'manage mobile app version', 'api credentials', 'payment gateway', 'fees management', 'manage referal settings',
'metas management', 'manage country', 'manage currency', 'manage language', 'manage static pages', 'manage help', 'social apps and links',
'manage support', 'system configuration']
export function DrawerList(){
    return ([
        {
            name: 'dashboard',
            icon: <SupervisorAccountIcon/>,
            href: 'dashboard'
        },
        {
            name: 'admins management',
            icon: <AdminPanelSettingsIcon/>,
            href: 'admins-management'
        },
        {
            name: 'manage company',
            icon: <SupervisorAccountIcon/>,
            href: 'manage-company'
        },
        {
            name: 'manage drivers',
            icon: <ManageAccountsIcon/>,
            href: 'manage-drivers'
        },
        {
            name: 'manage riders',
            icon: <PeopleAltIcon/>,
            href: 'manage-riders'
        },
        {
            name: 'manage documents',
            icon: <FolderIcon/>,
            href: 'manage-documents'
        },
        {
            name: 'send messages',
            icon: <BroadcastOnPersonalIcon/>,
            href: 'send-messages'
        },
        {
            name: 'manage emails',
            icon: <EmailIcon/>,
            href: 'manage-emails'
        },
        {
            name: 'manage manual bookings',
            icon: <DirectionsCarIcon/>,
            href: 'manage-manual-bookings'
        },
        {
            name: 'vehicles managing',
            icon: <SupervisorAccountIcon/>,
            href: 'manage-vehicles'
        },
        {
            name: 'additional reasons',
            icon: <PsychologyAltIcon/>,
            href: 'additional-reasons'
        },
        {
            name: 'cancellation reasons',
            icon: <NotInterestedIcon/>,
            href: 'cancellation-reasons'
        },
        {
            name: 'manage locations',
            icon: <EditLocationAltIcon/>,
            href: 'manage-locations'
        },
        {
            name: 'fair management',
            icon: <AttachMoneyIcon/>,
            href: 'fair-management'
        },
        {
            name: 'trips management',
            icon: <DirectionsCarIcon/>,
            href: 'trips-management'
        },
        {
            name: 'manage payouts',
            icon: <PaidIcon/>,
            href: 'manage-payouts'
        },
        {
            name: 'manage owe amount',
            icon: <AttachMoneyIcon/>,
            href: 'manage-owe-amount'
        },
        {
            name: 'manage statements',
            icon: <ArticleIcon/>,
            href: 'manage-statements'
        },
        {
            name: 'manage wallet & promo',
            icon: <WalletIcon/>,
            href: 'manage-wallet'
        },
        {
            name: 'referrals',
            icon: <PeopleAltIcon/>,
            href: 'referrals'
        },
        {
            name: 'manage map',
            icon: <SupervisorAccountIcon/>,
            href: 'manage-map'
        },
        {
            name: 'manage mobile app version',
            icon: <AppSettingsAltIcon/>,
            href: 'manage-mobile'
        },
        {
            name: 'api credentials',
            icon: <SettingsIcon/>,
            href: 'api-credentials'
        },
        {
            name: 'payment gateway',
            icon: <PaymentIcon/>,
            href: 'payment-gateway'
        },
        {
            name: 'fees management',
            icon: <PaymentIcon/>,
            href: 'fees-management'
        },
        {
            name: 'manage referral settings',
            icon: <SupervisorAccountIcon/>,
            href: 'manage-referral'
        },
        {
            name: 'metas management',
            icon: <SettingsIcon/>,
            href: 'metas-management'
        },
        {
            name: 'manage country',
            icon: <PublicIcon/>,
            href: 'manage country'
        },
        {
            name: 'manage currency',
            icon: <CurrencyExchangeIcon/>,
            href: 'manage-currency'
        },
        {
            name: 'manage language',
            icon: <PublicIcon/>,
            href: 'manage-language'
        },
        {
            name: 'manage static pages',
            icon: <SettingsIcon/>,
            href: 'manage-static-pages'
        },
        {
            name: 'manage help',
            icon: <SupervisorAccountIcon/>,
            href: 'manage-help'
        },
        {
            name: 'social apps and links',
            icon: <SupervisorAccountIcon/>,
            href: 'social-apps'
        },
        {
            name: 'manage support',
            icon: <SupervisorAccountIcon/>,
            href: 'manage-support'
        },
        {
            name: 'system configuration',
            icon: <SettingsIcon/>,
            href: 'system-config'
        }
    ])
}