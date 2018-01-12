// ##############################
// // // Dashboard styles
// #############################

var dashboardStyle = {
    successText: {
        color: '#4caf50',
    },
    upArrowCardCategory: {
        width: 14,
        height: 14,
    },
}

// ##############################
// // // StatsCard styles
// #############################

const statsCardStyle = {
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
    },
    cardHeader: {
        float: 'left',
        textAlign: 'center',
        margin: '-20px 15px 0',
        borderRadius: '3px',
        padding: '15px',
    },
    cardHeaderOrange: {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
    },
    cardHeaderGreen: {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
    },
    cardHeaderRed: {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
    },
    cardHeaderBlue: {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
    },
    cardHeaderPurple: {
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardContent: {
        textAlign: 'right',
        paddingTop: '10px',
        padding: '15px 20px',
    },
    cardIcon: {
        width: '40px',
        height: '36px',
        fill: '#fff',
    },
    cardAvatar: {
        margin: '8px',
    },
    cardCategory: {
        marginBottom: '0',
        color: '#999999',
        margin: '0 0 10px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '14px',
    },
    cardTitle: {
        margin: '0',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1.625em',
    },
    cardTitleSmall: {
        fontSize: '65%',
        fontWeight: '400',
        lineHeight: '1',
        color: '#777',
    },
    cardActions: {
        margin: '0 20px 10px',
        paddingTop: '10px',
        borderTop: '1px solid #eeeeee',
        height: 'auto',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardStats: {
        lineHeight: '22px',
        color: '#999999',
        fontSize: '12px',
        display: 'inline-block',
    },
    cardStatsIcon: {
        position: 'relative',
        top: '4px',
        width: '16px',
        height: '16px',
    },
    cardStatsIconWarning: {
        color: '#ff9800',
    },
    cardStatsIconPrimary: {
        color: '#9c27b0',
    },
    cardStatsIconDanger: {
        color: '#f44336',
    },
    cardStatsIconSuccess: {
        color: '#4caf50',
    },
    cardStatsIconInfo: {
        color: '#00bcd4',
    },
    cardStatsIconRose: {
        color: '#e91e63',
    },
    cardStatsIconGray: {
        color: '#999999',
    },
    cardStatsLink: {
        color: '#9c27b0',
        textDecoration: 'none',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
    }
};

// ##############################
// // // ChartCard styles
// #############################

const chartCardStyle = {
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
    },
    cardHeader: {
        padding: '0',
        minHeight: '160px',
        margin: '-20px 15px 0',
        borderRadius: '3px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardHeaderOrange: {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
    },
    cardHeaderGreen: {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
    },
    cardHeaderRed: {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
    },
    cardHeaderBlue: {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
    },
    cardHeaderPurple: {
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardContent: {
        padding: '15px 20px',
    },
    cardTitle: {
        marginTop: '0',
        marginBottom: '5px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1.175em',
    },
    cardCategory: {
        marginBottom: '0',
        color: '#999999',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '0.9em',
    },
    cardActions: {
        margin: '0 20px 10px',
        paddingTop: '10px',
        borderTop: '1px solid #eeeeee',
        height: 'auto',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardStats: {
        lineHeight: '22px',
        color: '#999999',
        fontSize: '12px',
        display: 'inline-block',
    },
    cardStatsIcon: {
        position: 'relative',
        top: '4px',
        width: '16px',
        height: '16px',
    },
    cardStatsIconWarning: {
        color: '#ff9800',
    },
    cardStatsIconPrimary: {
        color: '#9c27b0',
    },
    cardStatsIconDanger: {
        color: '#f44336',
    },
    cardStatsIconSuccess: {
        color: '#4caf50',
    },
    cardStatsIconInfo: {
        color: '#00bcd4',
    },
    cardStatsIconRose: {
        color: '#e91e63',
    },
    cardStatsIconGray: {
        color: '#999999',
    },
    cardStatsLink: {
        color: '#9c27b0',
        textDecoration: 'none',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
    }
};

// ##############################
// // // TasksCard styles
// #############################

const tasksCardStyle = {
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
    },
    cardHeader: {
        flex: 'none',
        padding: '15px',
        margin: '-20px 15px 0',
        borderRadius: '3px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardTitle: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        float: 'left',
        padding: '10px 10px 10px 0',
        lineHeight: '24px',
        fontSize: '14px',
        color: '#FFFFFF',
    },
    tabWrapper: {
        width: 'auto',
        display: 'inline-block',
        alignItems: 'inherit',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabIcon:{
        float: 'left',
        marginTop: '2px',
    },
    displayNone: {
        display: 'none',
    },
    labelIcon: {
        height: '44px',
        width: '110px',
        minWidth: '72px',
        paddingLeft: '14px',
        borderRadius: '3px',
    },
    tabsContainer: {
        marginTop: '4px',
        color: '#FFFFFF',
    },
    tabs: {
        width: '110px',
        minWidth: '70px',
        paddingLeft: '12px',
    },
    cardHeaderContent: {
        flex: 'none',
    },
    label: {
        lineHeight: '19px',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: '400',
        marginLeft: '5px'
    },
    rootInheritSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transition: 'background-color .1s .2s',
    },
};

// ##############################
// // // TableCard styles
// #############################

const tableCardstyle = {
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
    },
    cardPlain: {
        background: 'transparent',
        boxShadow: 'none',
    },
    cardHeader: {
        margin: '-20px 15px 0',
        borderRadius: '3px',
        padding: '15px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardHeaderOrange: {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
    },
    cardHeaderGreen: {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
    },
    cardHeaderRed: {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
    },
    cardHeaderBlue: {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
    },
    cardHeaderPurple: {
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardTitle: {
        color: '#FFFFFF',
        marginTop: '0',
        marginBottom: '5px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1.3em',
    },
    cardSubtitle: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        marginBottom: '0',
        color: 'rgba(255, 255, 255, 0.62)',
        margin: '0 0 10px',
    },
    tableHeaderWarning: {
        color: '#ff9800',
    },
    tableHeaderPrimary: {
        color: '#9c27b0',
    },
    tableHeaderDanger: {
        color: '#f44336',
    },
    tableHeaderSuccess: {
        color: '#4caf50',
    },
    tableHeaderInfo: {
        color: '#00bcd4',
    },
    tableHeaderRose: {
        color: '#e91e63',
    },
    tableHeaderGray: {
        color: '#999999',
    },
    table: {
        marginBottom: '0',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: 'transparent',
        borderSpacing: '0',
        borderCollapse: 'collapse',
    },
    tableCell: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.42857143',
        fontSize: '14px',
        padding: '12px 8px',
        verticalAlign: 'middle',
    },
    tableHeadCell: {

    }
};

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

// ##############################
// // //  styles
// #############################

module.exports = {
    dashboardStyle,
    statsCardStyle,
    chartCardStyle,
    tasksCardStyle,
    tableCardstyle
}
