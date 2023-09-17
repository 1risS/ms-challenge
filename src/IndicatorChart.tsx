import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { primary } from './Theme';

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

export default function IndicatorChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="y" stroke={primary.chart} dot={{ r: 4, fill: 'none' }} activeDot={{ r: 6, fill: primary.chart, stroke: primary.chart }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
