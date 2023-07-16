export interface Passanger {
    name: string;
    children?: string[];

}

const passager1: Passanger = {
    name: "Andrés"
}

const passager2: Passanger = {
    name: "Stefania",
    children: ["Sara", "Laura"]
}

const printChildrenNumber = ({ name, children }: Passanger): Number => {

    if (!children) { return 0 }

    const howManyChildren = children?.length || 0;
    // const howManyChildren = children!.length;

    console.log(name, howManyChildren);

    return howManyChildren;
}

printChildrenNumber(passager2);
printChildrenNumber(passager1);

