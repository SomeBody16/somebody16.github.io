import { Button } from '@/components/ui/button'

export const PrintButton = () => {
    return (
        <Button
            className='rounded-full px-6 py-4 text-lg shadow-lg'
            title='Print CV'
            onClick={() => {
                window.print()
            }}
        >
            🖨️ Print CV
        </Button>
    )
}
