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
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'admins management',
            icon: <AdminPanelSettingsIcon/>
        },
        {
            name: 'manage company',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'manage drivers',
            icon: <ManageAccountsIcon/>
        },
        {
            name: 'manage riders',
            icon: <PeopleAltIcon/>
        },
        {
            name: 'manage documents',
            icon: <FolderIcon/>
        },
        {
            name: 'send messages',
            icon: <BroadcastOnPersonalIcon/>
        },
        {
            name: 'manage emails',
            icon: <EmailIcon/>
        },
        {
            name: 'manage manual bookings',
            icon: <DirectionsCarIcon/>
        },
        {
            name: 'vehicles managing',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'additional reasons',
            icon: <PsychologyAltIcon/>
        },
        {
            name: 'cancellation reasons',
            icon: <NotInterestedIcon/>
        },
        {
            name: 'manage locations',
            icon: <EditLocationAltIcon/>
        },
        {
            name: 'fair management',
            icon: <AttachMoneyIcon/>
        },
        {
            name: 'trips management',
            icon: <DirectionsCarIcon/>
        },
        {
            name: 'manage payouts',
            icon: <PaidIcon/>
        },
        {
            name: 'manage owe amount',
            icon: <AttachMoneyIcon/>
        },
        {
            name: 'manage statements',
            icon: <ArticleIcon/>
        },
        {
            name: 'manage wallet & promo',
            icon: <WalletIcon/>
        },
        {
            name: 'referals',
            icon: <PeopleAltIcon/>
        },
        {
            name: 'manage map',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'manage mobile app version',
            icon: <AppSettingsAltIcon/>
        },
        {
            name: 'api credentials',
            icon: <SettingsIcon/>
        },
        {
            name: 'payment gateway',
            icon: <PaymentIcon/>
        },
        {
            name: 'fees management',
            icon: <PaymentIcon/>
        },
        {
            name: 'manage referal settings',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'metas management',
            icon: <SettingsIcon/>
        },
        {
            name: 'manage country',
            icon: <PublicIcon/>
        },
        {
            name: 'manage currency',
            icon: <CurrencyExchangeIcon/>
        },
        {
            name: 'manage language',
            icon: <PublicIcon/>
        },
        {
            name: 'manage static pages',
            icon: <SettingsIcon/>
        },
        {
            name: 'manage help',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'social apps and links',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'manage support',
            icon: <SupervisorAccountIcon/>
        },
        {
            name: 'system configuration',
            icon: <SettingsIcon/>
        },
    ])
}