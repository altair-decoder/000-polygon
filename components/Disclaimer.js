import * as React from 'react';
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '90%',
    height: '342px',
    bgcolor: "#ffffff73",
    borderRadius: "20px",
    backdropFilter: 'blur(8px)',
    boxShadow: 24,
    p: 4,
}

export default function Disclaimer() {
    const [open, setOpen] = React.useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h3" 
                    component="h2" 
                    sx={{
                        'font-family':'Poppins',
                        color:'#FFFFFF',
                        }}>
                        DISCLAIMER
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, 'font-family':'Poppins', color:'#FFFFFF','font-size': '14px'}}>
                    If this involves your company's copyright issues, please contact me and I will remove it immediately.
                    </Typography>
                    <Typography sx={{mt:15, 'font-family':'Poppins', color:'#FFFFFF',}}> @NftDropDapp</Typography>
                </Box>
            </Modal>
        </div>
        // <div className="mt-16 grid items-center justify-items-center text-center opacity-100 ">
        //     <h1 className="mt-2 font-Rubik lg:text-5xl md:text-3xl sm:text-2xl font-bold text-white">
        //         DISCLAIMER
        //     </h1>
        //     <h1 className="mt-5 ml-11 mr-11 font-Rubik lg:text-2xl md:text-md sm:text-sm font-light text-white">
        //         If this involves your company's copyright issues, please contact me and I will remove it immediately.
        //     </h1>
        // </div>
    )
}
