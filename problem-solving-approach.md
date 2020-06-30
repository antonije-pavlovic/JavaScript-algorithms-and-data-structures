# Problem solving
Some tip for solving problems:
* Devise a plan for solving problems
* Master common problem solving patterns

## Steps in solving problems

####      1. Understand problem 
 
  Questions to ask yourself: 
 
    * Can I restate the problem in my own words?
    
    * What are the input that go into the problem?
    
    * What are the otputs that should come from the solution to the problem?
    
    * Can outputs be determined from inputs. Do I have enough informations to solve the problem
    
    * How should I label the important pieces of data that are a part of problem?
    
####         2. Concrete examples
    
 Go throw examples like unit testing
        
    * Start with simple examples
    * Progress to more complex examples
    * Explore examples with empty inputs
    * Explore examples with invalid input
        
        
####         3. Break it down
 
 Explicitly write out the steps you need to take like comments
 
    ```
    // validate input
    // get user from database
    // check if user exists
    // update user in database
    // send mail
    // return response
    ```
 
 ####         4. Solve or simplify
 
 Solve the problem if you cant, solve a simpler problem, dont stuck, gain some experience
 
    * Find the core difficulty in what you are trying to do
    * Temporarily ignore that difficulty 
    * Write a simplified solution
    * Then incorporate that difficulty back in

 ####         5. Loop back and refactor
 
 Refactoring questions
    
    * Can I check the result?
    * Can you derive the result differently?
    * Can you understand it at a glance?
    * Can you use the result or method for some other problem?
    * Can you improve the performance of your code solution?
    * Can you think of other ways to refactor (code styles, etc.)?
    * How have other people solved this problem?
    
  Example: Instead of regexp check you can user check based on characters code
  
  Code between:
   
    * 47 and 58 are numeric
    * 64 and 91 are upper alpha
    * 96 and 123 lower alpha
