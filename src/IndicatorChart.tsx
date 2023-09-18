import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { primary } from './Theme';
import { styled, useTheme } from 'styled-components'

const data = [
    { x: 4, y: 3 },
    { x: 5, y: 2 },
    { x: 6, y: 6 },
    { x: 7, y: 8 },
    { x: 8, y: 9 },
    { x: 9, y: 10 },
    { x: 10, y: 9 },
    { x: 11, y: 10 },
    { x: 12, y: 12 },
    { x: 13, y: 12 },
];

const CustomTooltipContainer = styled.div`
    background-color: ${({ theme }) => theme.chartBg};
    color: ${primary.chart};
    font-size: 0.75rem;
    border: 1px solid ${primary.chart};
    padding: 0.5em;
`

interface ICustomTooltipProps {
    payload?: any;
    label?: any;
    active?: any;
}

function CustomTooltip({ payload, label, active }: ICustomTooltipProps) {
    if (active) {
        const x = label;
        const y = payload[0].value;

        return (
            <CustomTooltipContainer>
                <span>{y} new followers</span>
            </CustomTooltipContainer>
        );
    }

    return null;
}

const ChartContainer = styled.div`
    background-color: ${({ theme }) => theme.chartBg};
    padding-top: 2rem;
    padding-bottom: 4rem;
    border-radius: 23px;
    height: 200px;
`

const ChartTitle = styled.h2`
    color: ${primary.chart};
    text-align: left;
    margin-left: 3.5rem;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1.5em;
`

export default function IndicatorChart() {
    const theme = useTheme()

    return (
        <ChartContainer>
            <ChartTitle>May 4 - May 13</ChartTitle>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke={primary.chartTick} />
                    <XAxis dataKey="x" tick={{ stroke: primary.chart, strokeWidth: 0.5, fontSize: '0.65rem' }} tickMargin={8} stroke={primary.chart} />
                    <YAxis tick={{ stroke: primary.chart, strokeWidth: 0.5, fontSize: '0.65rem' }} tickMargin={8} stroke={primary.chart} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="y" stroke={primary.chart} dot={{ r: 4, fill: theme.chartBg }} activeDot={{ r: 6, fill: primary.chart, stroke: primary.chart }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
}
