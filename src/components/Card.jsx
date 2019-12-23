import React, { useState } from 'react'
// Material core
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
// Material icons
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: 485
  }
}))

function CardFooter(props) {
  return (
    <CardContent>
      <Grid container>
        <Grid item xs={1}>
          <EqualizerRoundedIcon color='primary' />
        </Grid>
        <Grid item>
          <Typography variant='overline'>
            {props.correct} of {props.answered} correct (
            {((props.correct / props.answered) * 100).toFixed(2) | 0}%)
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}

const Character = props => {
  return (
    <CardContent>
      <Typography align='center' variant='h1' gutterBottom>
        <Box fontWeight={500} fontSize={150} my={2}>
          {props.display}
        </Box>
      </Typography>
    </CardContent>
  )
}

const QuizCard = props => {
  const classes = useStyles()

  function handleHeaderClick() {
    props.onHeaderClick()
  }

  function handleSubmit(submission) {
    props.onSubmit(submission)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label='settings' onClick={handleHeaderClick}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Character display={props.quiz.question} />
      {props.quiz.type === 'recognition' ? (
        <Recognition
          quiz={props.quiz}
          onSubmit={submission => handleSubmit(submission)}
        />
      ) : (
        <Recall
          quiz={props.quiz}
          onSubmit={submission => handleSubmit(submission)}
        />
      )}
      <CardFooter correct={props.correct} answered={props.answered} />
    </Card>
  )
}

const Recognition = props => {
  const { answer, choices } = props.quiz

  const [reverse, setReverse] = useState(false)
  const [response, setResponse] = useState('')

  function handleResponse(selection) {
    setResponse(selection)
    setReverse(!reverse)
  }

  function handleSubmit() {
    const result = answer === response
    props.onSubmit(result)
    setResponse('')
    setReverse(!reverse)
  }

  return (
    <CardActions>
      {!reverse ? (
        <Grid
          container
          spacing={2}
          direction='row'
          justify='flex-end'
          alignItems='center'>
          {choices.map((choice, index) => (
            <Grid key={index} item xs={6} sm={6}>
              <Button
                onClick={() => handleResponse(choice)}
                fullWidth
                size='large'
                variant='outlined'
                color='primary'>
                {choice}
              </Button>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          direction='row'
          justify='flex-end'
          alignItems='center'>
          <Grid item xs={12} sm={12}>
            <Box my={1.3}>
              <Typography>
                {`Response: ${response}; Result: ${
                  answer === response ? 'correct' : 'incorrect'
                }`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              fullWidth
              size='large'
              variant='outlined'
              color='primary'
              onClick={() => handleSubmit(response)}>
              Try again
            </Button>
          </Grid>
        </Grid>
      )}
    </CardActions>
  )
}

function Recall(props) {
  const { answer } = props.quiz

  const [reverse, setReverse] = useState(false)

  function handleReverse() {
    setReverse(!reverse)
  }

  function handleSubmit(response) {
    props.onSubmit(response)
    setReverse(!reverse)
  }

  return (
    <CardActions>
      {!reverse ? (
        <Grid
          container
          spacing={2}
          direction='row'
          justify='flex-end'
          alignItems='center'>
          <Grid item xs={12} sm={12}>
            <Button
              onClick={() => handleReverse()}
              fullWidth
              size='large'
              variant='outlined'
              color='primary'>
              Flip the card
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          direction='row'
          justify='flex-end'
          alignItems='center'>
          <Grid item xs={12} sm={12}>
            <Button
              fullWidth
              size='large'
              variant='outlined'
              color='primary'
              onClick={() => handleSubmit(true)}>
              Correct
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              fullWidth
              size='large'
              variant='outlined'
              color='primary'
              onClick={() => handleSubmit(false)}>
              Incorrect
            </Button>
          </Grid>
        </Grid>
      )}
    </CardActions>
  )

  // return (
  //   <CardActions>
  //     {!reverse ? (
  //       <Grid
  //         container
  //         spacing={2}
  //         direction='row'
  //         justify='flex-end'
  //         alignItems='center'>
  //         <Grid item xs={12} sm={12}>
  //           <Box mt={7}>
  //             <Button
  //               onClick={() => handleReverse}
  //               fullWidth
  //               size='large'
  //               variant='outlined'
  //               color='primary'>
  //               Flip card
  //             </Button>
  //           </Box>
  //         </Grid>
  //       </Grid>
  //     ) : (
  //       <Grid
  //         container
  //         spacing={2}
  //         direction='row'
  //         justify='flex-end'
  //         alignItems='center'>
  //         <Grid item xs={12} sm={12}>
  //           <Box mt={7}>
  //             <Button
  //               onClick={handleSubmit(true)}
  //               fullWidth
  //               size='large'
  //               variant='outlined'
  //               color='primary'>
  //               Correct
  //             </Button>
  //             <Button
  //               onClick={handleSubmit(false)}
  //               fullWidth
  //               size='large'
  //               variant='outlined'
  //               color='primary'>
  //               Incorrect
  //             </Button>
  //           </Box>
  //         </Grid>
  //       </Grid>
  //     )}
  //   </CardActions>
  // )
}

export default QuizCard
