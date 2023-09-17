export default function IndicatorValue({ className, children }: any) {
    let value = children;

    if (value > 10000) {
        value = `${value / 1000}K`
    }
    return (
        <div className={className}>{value}</div>
    )
}
