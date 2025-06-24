type CardCategoryProps = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    categories?: CategoryData[];

}

type CategoryData = {
    id: number;
    name: string;
    selectValue: string;
}


const SelectCategory:React.FC<CardCategoryProps> = ({selectedCategory, setSelectedCategory, categories}) => {
    

    return (
        <>
        {categories && categories.map((category) => (
            <button
                key={category.id}
                onClick={() => setSelectedCategory(category.selectValue)}
                className={` text-center ${
                    selectedCategory === category.selectValue
                    ? 'border-[#EBEA22] border text-[#EBEA22] bg-[#fafaea7c] font-medium'
                    : 'bg-white border border-gray-200 text-black'
                } hover:border-[#EBEA22] hover:text-[#FFCC00] hover:bg-[#fafaea] text-sm transition-all duration-300 ease-in-out px-4 py-2 rounded-md`}
                >
                {category.name}
              </button>
            ))}
            </>
    )
}
export default  SelectCategory;