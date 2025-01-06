// import { Box, Button, TextField, Typography } from '@mui/material'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../store/store'
// import SelectFrndBtn from '../../atoms/SelectFriend';
// import { useState } from 'react';



// const CreateNewExpense = () => {
//     const [amount, setAmount] = useState<string>('');
//     const seletctedGroupInfoID = useSelector((state: RootState) => state.selectedItem.id);
//     const groupMembers = useSelector((state: RootState) => state.selectedItem.memberIds);
//     const [selectedFrnds, setSelectedFrnds] = useState<string[]>([]);
//     const [splitEqually, setSplitEqMethod] = useState<boolean>(true);
//     const toggleFriendSelection = (frndId: string) => {
//         setSelectedFrnds((prev) =>
//             prev.includes(frndId) ? prev.filter((id) => id !== frndId) : [...prev, frndId]
//         );
//     };

//     const handleToggleSplitMethod = () => {
//         setSplitEqMethod(!splitEqually);
//     }
//     return (
//         <Box sx={{ padding: '2rem', backgroundColor: '#181818' }}>
//             {/* {seletctedGroupInfoID === "" && <Typography color='#f1f1f1'>Select a group and try to add expense</Typography>
//     } */}

//             <Typography color='#f1f1f1'>Create new Expense</Typography>
//             <Typography color='#f1f1f1'>Select the person who payed</Typography>
//             {groupMembers?.map((members) => (
//                 <Button
//                     key={members}
//                     onClick={() => toggleFriendSelection(members)}
//                     sx={{
//                         backgroundColor: selectedFrnds.includes(members) ? '#5a5a5a' : 'transparent',
//                         borderRadius: '10px'
//                     }}
//                 >
//                     <SelectFrndBtn title={members} />
//                 </Button>
//             ))}

//             <TextField
//                 label="Enter Amount"
//                 value={amount}
//                 onChange={(e) => {
//                     const value = e.target.value;
//                     if (/^\d*\.?\d*$/.test(value) || value === '') {
//                         setAmount(value);
//                     }
//                 }}
//                 type="text"
                
//                 margin="normal"
//                 sx={{
//                     backgroundColor: 'white',
//                     borderRadius: '10px',
//                 }}
                
//             />

//                 <Typography color='#f1f1f1'>Select split Method</Typography>
//                 <Button variant="outlined" sx={{color:'#9be0c3', borderColor:'#9be0c3'}} onClick={() => handleToggleSplitMethod()}>
//                     <Typography>{splitEqually === true ? "Equally" : "Unequally"}</Typography>
//                 </Button>


//                 {
//                     splitEqually === false && (
//                         <Box>

//                             </Box>
//                     )
//                 }

//         </Box>
//     )
// }

// export default CreateNewExpense



import { Box, Button, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import SelectFrndBtn from '../../atoms/SelectFriend';
import { useState } from 'react';

const CreateNewExpense = () => {
    const [amount, setAmount] = useState<string>(''); // Total expense amount
    const seletctedGroupInfoID = useSelector((state: RootState) => state.selectedItem.id);
    const groupMembers = useSelector((state: RootState) => state.selectedItem.memberIds);
    const [selectedFrnds, setSelectedFrnds] = useState<string[]>([]);
    const [splitEqually, setSplitEqMethod] = useState<boolean>(true);
    const [splitMode, setSplitMode] = useState<'percentage' | 'fixed'>('fixed'); // Split mode toggle
    const [splitDetails, setSplitDetails] = useState<{ [key: string]: number }>({}); // Individual splits

    // Toggle friend selection
    const toggleFriendSelection = (frndId: string) => {
        setSelectedFrnds((prev) =>
            prev.includes(frndId) ? prev.filter((id) => id !== frndId) : [...prev, frndId]
        );
    };

    // Toggle between equal and unequal split
    const handleToggleSplitMethod = () => {
        setSplitEqMethod(!splitEqually);
    };

    // Toggle split mode (percentage or fixed)
    const handleToggleSplitMode = () => {
        setSplitMode((prev) => (prev === 'fixed' ? 'percentage' : 'fixed'));
    };

    // Handle per-person split value
    const handleSplitChange = (frndId: string, value: string) => {
        if (/^\d*\.?\d*$/.test(value) || value === '') {
            setSplitDetails((prev) => ({
                ...prev,
                [frndId]: value === '' ? 0 : Number(value),
            }));
        }
    };

    return (
        <Box sx={{ padding: '2rem', backgroundColor: '#181818' }}>
            <Typography color='#f1f1f1' variant="h5">Create new Expense</Typography>
            <Typography color='#f1f1f1'>Select the person who paid</Typography>
            {groupMembers?.map((member) => (
                <Button
                    key={member}
                    onClick={() => toggleFriendSelection(member)}
                    sx={{
                        backgroundColor: selectedFrnds.includes(member) ? '#5a5a5a' : 'transparent',
                        borderRadius: '10px'
                    }}
                >
                    <SelectFrndBtn title={member} />
                </Button>
            ))}

            {/* Total Amount */}
            <TextField
                label="Enter Amount"
                value={amount}
                onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*\.?\d*$/.test(value) || value === '') {
                        setAmount(value);
                    }
                }}
                type="text"
                margin="normal"
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                }}
            />

            {/* Split Method */}
            <Typography color='#f1f1f1' sx={{ marginTop: '1rem' }}>Select Split Method</Typography>
            <Button
                variant="outlined"
                sx={{ color: '#9be0c3', borderColor: '#9be0c3' }}
                onClick={handleToggleSplitMethod}
            >
                <Typography>{splitEqually ? 'Equally' : 'Unequally'}</Typography>
            </Button>

            {/* Unequal Split Options */}
            {!splitEqually && (
                <Box sx={{ marginTop: '1rem' }}>
                    {/* Toggle Percentage or Fixed */}
                    <Typography color='#f1f1f1'>Select Split Mode</Typography>
                    <Button
                        variant="outlined"
                        sx={{ color: '#9be0c3', borderColor: '#9be0c3' }}
                        onClick={handleToggleSplitMode}
                    >
                        <Typography>{splitMode === 'fixed' ? 'Fixed Amount' : 'Percentage'}</Typography>
                    </Button>

                    {/* Input for Individual Splits */}
                    {selectedFrnds.map((frnd) => (
                        <Box key={frnd} sx={{ marginTop: '1rem' }}>
                            <Typography color='#f1f1f1'>{frnd}</Typography>
                            <TextField
                                label={`Enter ${splitMode === 'percentage' ? 'Percentage' : 'Amount'}`}
                                value={splitDetails[frnd] || ''}
                                onChange={(e) => handleSplitChange(frnd, e.target.value)}
                                type="text"
                                margin="normal"
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                }}
                            />
                        </Box>
                    ))}

                    {/* Validation */}
                    {splitMode === 'percentage' && (
                        <Typography color='#f1f1f1' sx={{ marginTop: '1rem' }}>
                            Total Percentage: {Object.values(splitDetails).reduce((a, b) => a + b, 0)}%
                        </Typography>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default CreateNewExpense;
