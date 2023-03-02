const configs: {
    state: {
        [key: string]: string
    }
} = {
    state:{
        primary: "border-2 border-transparent bg-purple hover:bg-navy focus:bg-navy active:bg-navy text-white",
        secondary: "border-2 border-purple-soft2 hover:border-transparent bg-purple-soft hover:bg-navy focus:bg-navy active:bg-navy text-purple",

        disabled: "border-2 border-transparent bg-soft-gray text-gray",
        loading: "border-2 border-transparent bg-soft-gray text-gray",

        alternative: "",
    }
}
export default configs;
