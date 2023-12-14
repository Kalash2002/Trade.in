import Currency from "@/public/currency_icon.png";
import Commody from "@/public/commody_icon.png";
import FutureOpt from "@/public/future_opt_icon.png";
import MultiFund from "@/public/multi_funds_icon.png";
import StockIcon from "@/public/stocks_icon.png";
import IPOSIcon from "@/public/ipos_icon.png";
import CompountInreIcon from '@/public/CompoundInterestCalculator.png'
import ELLS from '@/public/ELSSCalculator.png'
import FDCal from '@/public/FDCalculator.png'
import FutureValue from '@/public/FutureValueCalculator.png'
import GSTCal from '@/public/GSTCalculator.png'
import MarginCal from '@/public/MarginCalculator.png'
import MutualFundReturns from '@/public/MutualFundReturnsCalculator.png'
import NPSCal from '@/public/NPSCalculator.png'
import NPVcal from '@/public/NPVCalculator.png'
import OptionValueCal from '@/public/OptionValueCalculator.png'
import SIPcal from '@/public/SIPCalculator.png'
import SWPcal from '@/public/SWPCalculator.png'

import BrokerageIcon from '@/public/BrokerageCalculator.png'

export const ToolList = [
  {
    id: 1,
    toolName: "Brokerage Calculator",
    icon: BrokerageIcon,
    url: "/",
  },
  {
    id: 2,
    toolName: "Margin Calculator",
    icon: MarginCal,
    url: "/",
  },
  {
    id: 3,
    toolName: "Mutual Fund Returns Calculator",
    icon: MutualFundReturns,
    url: "/",
  },
  {
    id: 4,
    toolName: "SIP Calculator",
    icon: SIPcal,
    url: "/",
  },
  {
    id: 5,
    toolName: "NPV Calculator",
    icon: NPVcal,
    url: "/",
  },
  {
    id: 6,
    toolName: "Future Value Calculator",
    icon: FutureValue,
    url: "/",
  },
  {
    id: 7,
    toolName: "SWP Calculator",
    icon: SWPcal,
    url: "/",
  },
  {
    id: 8,
    toolName: "ELSS Calculator",
    icon: ELLS,
    url: "/",
  },
  {
    id: 9,
    toolName: "Option Value Calculator",
    icon: OptionValueCal,
    url: "/",
  },
  {
    id: 10,
    toolName: "NPS Calculator",
    icon: NPSCal,
    url: "/",
  },
  {
    id: 11,
    toolName: "Compound Interest Calculator",
    icon: CompountInreIcon,
    url: "/",
  },
  {
    id: 12,
    toolName: "GST Calculator",
    icon: GSTCal,
    url: "/",
  },
];

export const MultipleOptionList = [
  {
    id: 1,
    optionName: "Stocks",
    icon: StockIcon,
  },
  {
    id: 2,
    optionName: "Mutual Funds",
    icon: MultiFund,
  },
  {
    id: 3,
    optionName: "Future & Options",
    icon: FutureOpt,
  },
  {
    id: 4,
    optionName: "Commodities",
    icon: Commody,
  },
  {
    id: 5,
    optionName: "IPOs",
    icon: IPOSIcon,
  },
  {
    id: 6,
    optionName: "Currencies",
    icon: Currency,
  },
];
