

import {AppBar, Toolbar, styled} from '@mui/material';

const Container = styled(AppBar)`
    background: #000622;
`

const Header = () =>{
    return (
        <Container position="static">
            <Toolbar>
                Code Editor
            </Toolbar>
        </Container>
    )
}
export default Header;