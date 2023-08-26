const dataHandler=(data,type)=>{
    if(type==="Token Address"){
        data.sort((a,b)=>parseFloat(b.priceUsd)-parseFloat(a.priceUsd))
    }
    const newdata=[];
    data.map((item,count)=>{
        console.log()
        if(count>9 && type==="Token Address"){
            return;            
        }
        newdata.push({
            basicInfo:[
                {
                    key:'Pair created at',
                    value:typeof(item.pairCreatedAt)==="number"?item.pairCreatedAt.toString():item.pairCreatedAt
                },
                {
                    key:'Symbol',
                    value:typeof(item?.baseToken?.symbol)==="number"?item?.baseToken?.symbol.toString():item?.baseToken?.symbol
                },
                {
                    key:'Dex ID',
                    value:typeof(item?.dexId)==='number'?item?.dexId.toString():item?.dexId
                },
                {
                    key:'Pair Address',
                    value:typeof(item.pairAddress)==="number"?item?.pairAddress.toString():item.pairAddress
                }
            ],
            baseToken:[
                {
                    key:'Name',
                    value:typeof(item?.baseToken?.name)==='number'?item?.baseToken?.name.toString():item?.baseToken?.name
                },
                {
                    key:"Symbol",
                    value:typeof(item?.baseToken?.symbol)==='number'?item?.baseToken?.symbol.toString():item?.baseToken?.symbol
                },
                {
                    key:"Address",
                    value:typeof(item?.baseToken?.address)==='number'?item?.baseToken?.address.toString():item?.baseToken?.address
                }
            ],
            quoteToken:[
                {
                    key:"Name",
                    value:typeof(item.quoteToken.name)==='number'?item.quoteToken.name.toString():item.quoteToken.name
                },
                {
                    key:"Symbol",
                    value:typeof(item.quoteToken.symbol)==='number'?item.quoteToken.symbol.toString():item.quoteToken.symbol
                },
                {
                    key:"Address",
                    value:typeof(item.quoteToken.address)==="number"?item.quoteToken.address.toString():item.quoteToken.address
                }
            ],
            Price:[
                {
                    key:'Price Native',
                    value:typeof(item.priceNative)==="number"?item.priceNative.toString():item.priceNative
                },
                {
                    key:'Price USD',
                    value:typeof(item.priceUsd)==='number'?item?.priceUsd.toString():item?.priceUsd
                }
            ]
        })
    })
    return newdata;
}
export default dataHandler