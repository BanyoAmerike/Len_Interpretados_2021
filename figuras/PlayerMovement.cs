using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;
[RequireComponent(typeof(CharacterController))]

//Receives input and moves the main player
public class PlayerMovement : MonoBehaviour
{
    #region Get&Set
    public bool Active
    {
        get
        {
            return active;
        }
        set
        {
            active = value;
        }
    }
    #endregion

    Keyboard keyBoard;
    Gamepad gamePad;
    CharacterController characterController;

    private bool active;
    private Vector3 movementDirection;
    public float MovementSpeed = 1.0f;

    void Prepare()
    {
        #if UNITY_STANDALONE_WIN || UNITY_STANDALONE_OSX || UNITY_EDITOR
        keyBoard = Keyboard.current;
        #endif
        gamePad = Gamepad.current;
        characterController = GetComponent<CharacterController>();
        active = true;
    }

    public void Start()
    {
        Prepare();
    }
    void Update()
    {
        if (active)
        {
            if(keyBoard != null)
            {
              CheckInputKeyBoard();
            }
        }
    }

    void FixedUpdate()
    {
        
    }

    void CheckInputKeyBoard()
    {
        movementDirection = Vector3.zero;
        if (keyBoard.wKey.isPressed)
        {
            movementDirection += Vector3.forward;
        }
        if (keyBoard.sKey.isPressed)
        {
            movementDirection += Vector3.back;
        }
        if (keyBoard.aKey.isPressed)
        {
            movementDirection += Vector3.left;
        }
        if (keyBoard.dKey.isPressed)
        {
            movementDirection += Vector3.right;
        }
            movementDirection.Normalize();
            Move(movementDirection);
    }

    void Move(Vector3 direction)
    {
        characterController.Move((direction * 0.1f) * MovementSpeed);
    }
}
